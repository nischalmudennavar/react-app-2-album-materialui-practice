import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      },
      icon: {
          marginRight: "20px",
          
      },
      buttons: {
          marginTop: '40px',
          margin: "10px"
      },
      internalBtn: {
          margin:theme.spacing(5,1,5)
          
      },
      cardGrid: {
          padding: "20px 0",
      },
      card: {
          height: "100%",
          display: "flex",
          flexDirection: "column",
          margin: "10px",
      },
      cardMedia: {
          paddingTop: "56.25%",
      },
      cardContent: {
          flexGrow: 1,
      },
      footer: {
          backgroundColor: theme.palette.background.paper,
          padding: "50px 0",
        },  
      

  };
});
export default useStyles;