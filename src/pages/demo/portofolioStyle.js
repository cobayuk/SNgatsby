import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor:'#F1EDEA',
    padding: theme.spacing(8, 0, 6),
    width: '100%',
    height: 250,
    marginTop: theme.spacing(2),
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  innerTriangleContent: {
    width: '100%',
    position: 'absolute',
    zIndex: -1,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '286px 0 80px 1601px',
    borderColor: '#F1EDEA transparent transparent #F1EDEA',
    bottom: 0,
    left: 0
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  headingPorto: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: 1.4
  },
  headingDescPorto: {
    fontFamily: 'Oxygen',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    display: 'flex',
    padding: theme.spacing(0, 2),
    margin: '0 auto',
    maxWidth: 768
  }
}));

export default useStyles;
