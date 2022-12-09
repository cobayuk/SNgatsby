import React, { Fragment, useEffect } from 'react';
import { Box } from "@material-ui/core";

const Comments = () => {

  const COMMENTS_ID = 'graphcomment';

  useEffect(() => {
    initGrapComment();
  }, []);

  const initGrapComment = () => {
    window.gc_params = {
      graphcomment_id: 'SungnikahID',
      fixed_header_height: 0,
    };

    const script = document.createElement('script');
    script.src = 'https://graphcomment.com/js/integration.js?' + Date.now();
    script.async = true;

    const comments = document.getElementById(COMMENTS_ID);
    if (comments) comments.appendChild(script);

    // This function will get called when the component unmounts
    // To make sure we don't end up with multiple instances of the comments component
    return () => {
      const comments = document.getElementById(COMMENTS_ID);
      if (comments) comments.innerHTML = '';
    };
  }

  return (
    <Fragment>
      <Box mb={15} mt={5}>
        <div id={COMMENTS_ID}></div>
      </Box>
    </Fragment>
  );
};

export default Comments;
