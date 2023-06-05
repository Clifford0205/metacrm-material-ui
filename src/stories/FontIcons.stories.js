import React, { useState } from "react";
import makeStyles from "@mui/styles/makeStyles";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from "react-toastify";
import reactElementToJSXString from "react-element-to-jsx-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./scss/_font-icon.scss";
import fileNames from "../../assets/fonts/svgFileName.json";

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
    marginTop: "1rem",
  },
  iconBlock: {
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "10%",
    margin: "0 1rem 1rem 0",
    borderRadius: "0.25rem",
    padding: "0.5rem",

    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.1)",
    },
  },
  icon: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem 0",
  },
  iconKey: {
    color: "#666666",
    fontSize: "0.75rem",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
});

export default {
  title: "Example",
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "font-size-10",
          "font-size-12",
          "font-size-16",
          "font-size-20",
          "font-size-24",
          "font-size-28",
          "font-size-32",
          "font-size-36",
          "font-size-40",
          "font-size-44",
          "font-size-48",
          "font-size-54",
          "font-size-64",
          "font-size-72",
          "font-size-112",
        ],
      },
    },
  },
};

const Template = (args) => {
  const styleClasses = useStyle();

  const [text, searchText] = useState(null);

  const handleSearch = (e) => {
    searchText(e.target.value);
  };

  const getFilteredIcons = () => {
    if (text) {
      return Object.keys(fileNames).filter(
        (key) => key.toLowerCase().indexOf(text.toLowerCase()) > -1
      );
    }
    return Object.keys(fileNames);
  };

  const onCopy = (data) => () => {
    toast.info(`Copied ${reactElementToJSXString(data)}`);
  };

  return (
    <div className={styleClasses.root}>
      <TextField
        className={styleClasses.searchInput}
        id="filled-search"
        label="Search Icon"
        type="search"
        variant="outlined"
        onChange={handleSearch}
      />
      <h2 className={styleClasses.titleText}>Font Icons</h2>
      <p className={styleClasses.hintText}>Click icon to copy the script.</p>
      <div className={styleClasses.iconSection}>
        {Object.keys(fileNames).length &&
          getFilteredIcons().map((key) => {
            const { classes = "font-size-32" } = args;
            const fontIcon = <i className={`font-icon-${key} ${classes}`} />;
            return (
              <CopyToClipboard
                text={reactElementToJSXString(fontIcon)}
                key={key}
                onCopy={onCopy(fontIcon)}
              >
                <div className={styleClasses.iconBlock}>
                  <div className={styleClasses.icon}>{fontIcon}</div>
                  <div className={styleClasses.iconKey}>{key}</div>
                </div>
              </CopyToClipboard>
            );
          })}
      </div>
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
    </div>
  );
};

export const FontIcons = Template.bind({});
