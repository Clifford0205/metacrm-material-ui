import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

import * as icons from "@/components/SvgIcon";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import { ToastContainer, toast } from "react-toastify";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    display: "inline-block",
    fontFamily: "sans-serif",
    marginBottom: 0,
  },
  hintText: {
    display: "inline-block",
    fontFamily: "sans-serif",
  },
  searchInput: {
    width: "100%",
  },
  iconSection: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  iconBlock: {
    background: "rgba(0, 0, 0, 0.07)",
    borderRadius: "0.25rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    width: "10%",
    alignItems: "center",
    margin: "0.5rem",
    padding: "0.5rem",

    "&:hover": {
      boxShadow: "0 8px 16px 0 rgb(0 0 0 / 10%)",
    },
  },
  icon: {
    display: "inline-block",
    marginBottom: "0.25rem",
  },
});

const ignore = ["SvgIcon", "CircleIconWrapper"];

const SvgIconTemplate = (args) => {
  const classes = useStyle();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleCopied = (text, result) => {
    console.log("text, result: ", text, result);
    if (result) {
      toast.info(`Copied ${text}`);
    }
  };

  const getFilteredIcons = () => {
    if (search) {
      return Object.keys(icons).filter(
        (key) => key.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    }
    return Object.keys(icons);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.searchInput}
        id="filled-search"
        label="Search Icon"
        type="search"
        variant="outlined"
        onChange={handleSearch}
      />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2 className={classes.titleText}>SVG Icons</h2>
      <p className={classes.hintText}>Click icon to copy the key.</p>
      <div className={classes.iconSection}>
        {getFilteredIcons().map((key) => {
          if (ignore.includes(key)) {
            return null;
          }
          const Comp = icons[key];
          return (
            <CopyToClipboard key={key} text={key} onCopy={handleCopied}>
              <Tooltip title={key} placement="top">
                <div className={classes.iconBlock}>
                  <Comp {...args} />
                </div>
              </Tooltip>
            </CopyToClipboard>
          );
        })}
      </div>
    </div>
  );
};

export const svgIcon = SvgIconTemplate.bind({});
svgIcon.args = {
  fontSize: "large",
  classes: { root: "test" },
};

export default {
  title: "Example",
  component: SvgIcon,
};
