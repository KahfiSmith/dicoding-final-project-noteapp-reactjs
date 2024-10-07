export const generateNoteId = (notesData) => {
  const nextIdNumber = notesData.length + 1; 
  const paddedId = String(nextIdNumber).padStart(4, '0'); 
  return `NT${paddedId}`; 
};
