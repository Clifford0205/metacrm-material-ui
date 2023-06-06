import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import makeStyles from '@mui/styles/makeStyles';

import { colorGuide } from '@/constants/basicColor';

const useStyle = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #e9e9e9',
  },
  titleText: {
    display: 'inline-block',
    fontFamily: 'sans-serif',
    marginBottom: 0,
  },
  sectionTitleText: {
    display: 'inline-block',
    fontFamily: 'sans-serif',
  },
  hintText: {
    display: 'inline-block',
    fontFamily: 'sans-serif',
  },
  colorSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  paletteBlock: {
    display: 'flex',
    flexDirection: 'column',
    width: '10%',
    alignItems: 'center',
    margin: '0 1rem 1rem 0',
  },
  palette: {
    cursor: 'pointer',
    display: 'inline-block',
    width: '5rem',
    height: '5rem',
    borderRadius: '0.25rem',
    boxShadow: '0 8px 16px 0 rgb(0 0 0 / 10%)',
    marginBottom: '0.25rem',

    '&:hover': {
      boxShadow: '0 8px 16px 0 rgb(0 0 0 / 20%)',
    },
  },
  colorKey: {
    color: '#212121',
    fontSize: '0.875rem',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  colorCode: {
    color: '#666666',
    fontSize: '0.75rem',
    fontFamily: 'sans-serif',
  },
});

const ColorsTemplate = () => {
  const classes = useStyle();

  const handleCopied = (text, result) => {
    if (result) {
    }
  };

  return (
    <div className={classes.root}>
      <h2 className={classes.titleText}>Colors</h2>
      <p className={classes.hintText}>Click palette to copy the color code.</p>

      {Object.entries(colorGuide).map(([type, lists]) => {
        const renderColorSection = Object.entries(lists).map(([key, value]) => (
          <CopyToClipboard key={key} text={key} onCopy={handleCopied}>
            <div className={classes.paletteBlock}>
              <div
                className={classes.palette}
                style={{ backgroundColor: value }}
              />
              <div className={classes.colorKey}>{key}</div>
              <div className={classes.colorCode}>{value}</div>
            </div>
          </CopyToClipboard>
        ));

        return (
          <div className={classes.section}>
            <h2 className={classes.sectionTitleText}>{type}</h2>
            <div className={classes.colorSection}>{renderColorSection}</div>
          </div>
        );
      })}
    </div>
  );
};

export const colors = ColorsTemplate.bind({});

export default {
  title: 'Example/Colors/Colors',
};
