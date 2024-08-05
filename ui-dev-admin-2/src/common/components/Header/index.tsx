import { Typography, AppBar, Link, Container } from '@material-ui/core';
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import logo from 'assets/images/nccsoft_vietnam_logo.png';
import EnglishIcon from 'assets/images/flag-icon/united-kingdom.png';
import { useStyles } from 'common/components/Header/style';

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes['main-header']}>
      <Link
        className={classes.logo}
        href="/app/home"
        onClick={(e) => e.preventDefault()}
        underline="none"
      >
        <img src={logo} alt="logo" />
        <Typography variant="h1">Timesheet</Typography>
      </Link>
      <Container maxWidth={false} className={classes['right-block']}>
        <a href="https://docs.google.com/document/d/13kP2JNm9BhWx0-BW7Hb0RJmukF4r6G9JjZb6tIpcEUU/edit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM288.1 344.1C284.3 349.7 278.2 352 272 352s-12.28-2.344-16.97-7.031L216 305.9V408c0 13.25-10.75 24-24 24s-24-10.75-24-24V305.9l-39.03 39.03c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.375-9.375 24.56-9.375 33.94 0l80 80C298.3 320.4 298.3 335.6 288.1 344.1z" />
          </svg>
        </a>
        <a href="https://docs.google.com/document/d/1M4EM-uPJLOxYx-BW8xyQsNjZFTQpgFA42GdtYjNok64/edit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM272 416h-160C103.2 416 96 408.8 96 400C96 391.2 103.2 384 112 384h160c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 352h-160C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320h160c8.836 0 16 7.162 16 16C288 344.8 280.8 352 272 352zM288 272C288 280.8 280.8 288 272 288h-160C103.2 288 96 280.8 96 272C96 263.2 103.2 256 112 256h160C280.8 256 288 263.2 288 272z" />
          </svg>
        </a>
        <Container
          maxWidth={false}
          className={classes['language-option']}
          disableGutters
        >
          <Typography className={classes['current-language']} component="span">
            <img src={EnglishIcon} alt="" />
            <Typography component="span" variant="body2">
              English
            </Typography>
            <ArrowDropDownSharpIcon className={classes['icon-dropdown']} />
          </Typography>
        </Container>
        <Container disableGutters>
          <MoreVertIcon />
        </Container>
      </Container>
    </AppBar>
  );
}

export default Header;
