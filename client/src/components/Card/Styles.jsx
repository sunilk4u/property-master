import theme from "../../theme/Theme";

export const CardSx = {
    borderRadius: "10px"
};
export const MainBoxSx = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
};
export const MediaBoxSx = {
  maxWidth: {
    xs: "100%",
    sm: "25%",
  },
};
export const DetailsBoxSx = {
  width: {
    xs: "100%",
    sm: "55%",
  },
  padding: "1rem",
  "& h6": {
    backgroundColor: "#d9a1dc8a",
    padding: "0rem 1rem",
    borderRadius: "10px 10px 0px 0px",
    color: theme.palette.dark.main,
    fontWeight: "600"
  },
  "& p": {
    fontWeight: "600",

  }
};
export const DescriptionBoxSx = {

};
export const ActionsSx = {
  display: "flex",
  flexDirection: {
    xs: "row",
    sm: "column",
  },
  gap: {
    xs: "3rem",
    sm: "0",
  },
  margin: "auto",
};
