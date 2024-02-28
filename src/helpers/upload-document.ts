import * as fs from 'fs';
import * as path from 'path';

export const savePdfFileToLocalPath = (
  exchangeId: number,
  fileType: string,
  file: Buffer,
): string => {
  const uploadPath = path.join(__dirname, 'uploads', exchangeId.toString());
  const filename = `${fileType}_${Date.now()}.pdf`;
  const filePath = path.join(uploadPath, filename);

  fs.mkdirSync(uploadPath, { recursive: true });

  fs.writeFileSync(filePath, file);

  return filePath;
};
