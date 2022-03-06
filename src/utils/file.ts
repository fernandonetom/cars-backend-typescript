import fs from 'fs';

export const deleteFile = async (fileName) => {
  try {
    await fs.promises.stat(fileName);

    await fs.promises.unlink(fileName);

    return true;
  } catch (error) {
    return false;
  }
};
