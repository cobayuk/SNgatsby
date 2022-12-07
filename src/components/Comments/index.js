import React, { Fragment, useEffect } from 'react';

const Comments = () => {

  const COMMENTS_ID = 'graphcomment';

  useEffect(() => {
    initGrapComment();
  }, []);

  const initCommento = () => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commento.io/js/commento.js';
    script.async = true;

    const comments = document.getElementById('comments-container');
    if (comments) comments.appendChild(script);
  }

  const initGrapComment = () => {
    console.log('init')
    window.gc_params = {
      graphcomment_id: 'SungnikahID',
      fixed_header_height: 0,
    };

    const script = document.createElement('script');
    script.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
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
      {/* <div id="comments-container"></div> */}
      {/* <div id="commento"></div> */}
      <div id={COMMENTS_ID}></div>
    </Fragment>
  );
};

export default Comments;
