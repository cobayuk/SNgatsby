import React from "react";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function CopyLink() {
  const [alertOpen, setAlertOpen] = React.useState(false)

  const CopyToClipboard = toCopy => {
    const el = document.createElement(`textarea`)
    el.value = toCopy
    el.setAttribute(`readonly`, ``)
    el.style.position = `absolute`
    el.style.left = `-9999px`
    document.body.appendChild(el)
    el.select()
    document.execCommand(`copy`)
    document.body.removeChild(el)
  }
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => {
          CopyToClipboard(window.location.href)
          setAlertOpen(true)
        }}
      >
        Copy Link to Clipboard
      </Button>

      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert
          onClose={() => setAlertOpen(false)}
          severity="success"
          variant="filled"
        >
          
        </Alert>
      </Snackbar>
    </>
  )
}
