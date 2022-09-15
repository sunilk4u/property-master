export const BoxSx = {
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  gridTemplateColumns: {
    xs: "1fr",
    sm: "1fr",
    md: "1fr",
    lg: "1fr",
    xl: "1fr 1fr 1fr 1fr",
  },
  gridTemplateRows: {
    xs: "1fr 1fr 1fr 1fr",
    sm: "1fr 1fr 1fr 1fr",
    md: "1fr 1fr 1fr 1fr",
    lg: "1fr 1fr 1fr 1fr",
    xl: "1fr",
  },
};

export const AutocompleteSx = {
  width: "100%",
  mx: "auto",
  my: {
    xs: 1.5,
    sm: 1.5,
    md: 1.5,
    lg: 1.5,
    xl: 0,
  },
  "& label": {
    fontSize: {
      xs: "0.6rem",
      sm: "0.6rem",
      md: "0.7rem",
      lg: "0.9rem",
      xl: "1rem",
    },
  },
};

export const ButtonSx = {
  backgroundColor: "#C996CC",
  width: "100%",
  height: {
    xs: "10",
    sm: "20",
    md: "30",
    lg: "50",
    xl: "50",
  },
  fontSize: {
    xs: "0.5rem",
    sm: "0.5rem",
    md: "0.7rem",
    lg: "0.9rem",
    xl: "1rem",
  },
  mx: "auto",
  marginLeft: {
    xs: "0px",
    sm: "0px",
    md: "0px",
    lg: "0px",
    xl: "10px",
  },
};
