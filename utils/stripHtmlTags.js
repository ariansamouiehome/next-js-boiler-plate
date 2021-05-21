const stripHtmlTags = (text) => {
    return text.replace(/(<([^>]+)>)/gi, '');
};
  
export default stripHtmlTags;