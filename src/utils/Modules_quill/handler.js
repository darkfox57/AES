export const handleImageUpload = async () => {
 const fileInput = document.createElement('input');
 fileInput.setAttribute('type', 'file');
 fileInput.setAttribute('accept', 'image/*');
 fileInput.click();

 fileInput.onchange = async () => {
  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'mpbfbben');

  const response = await fetch(
   'https://api.cloudinary.com/v1_1/dhjfxxpja/image/upload',
   {
    method: 'POST',
    body: formData,
   }
  );

  const data = await response.json();
  const imageUrl = data.secure_url;
  setImageUrl(imageUrl);

  const range = quillRef.current.getEditor().getSelection();
  quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl);
 };
};
