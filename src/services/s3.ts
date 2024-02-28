import { S3 } from 'aws-sdk';

class S3Service {
  private s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(
    key: string,
    fileBuffer: Buffer,
  ): Promise<{ s3Url: string; key: string }> {
    try {
      const params: S3.Types.PutObjectRequest = {
        Bucket: process.env.AWS_BUCKET || '',
        Key: key,
        Body: fileBuffer,
      };

      const result = await this.s3.upload(params).promise();

      return {
        s3Url: result.Location,
        key: result.Key,
      };
    } catch (error) {
      console.error('Error uploading file:', error);
      throw new Error('Failed to upload file');
    }
  }

  async deleteFile(key: string): Promise<void> {
    try {
      const params: S3.Types.DeleteObjectRequest = {
        Bucket: process.env.AWS_BUCKET || '',
        Key: key,
      };

      await this.s3.deleteObject(params).promise();
    } catch (error) {
      console.error('Error deleting file:', error);
      throw new Error('Failed to delete file');
    }
  }

  async updateFile(
    key: string,
    newKey: string,
    fileBuffer: Buffer,
  ): Promise<{ s3Url: string; key: string }> {
    try {
      // Delete the existing file
      await this.deleteFile(key);

      // Upload the new file
      const newFile = await this.uploadFile(newKey, fileBuffer);

      return newFile;
    } catch (error) {
      console.error('Error updating file:', error);
      throw new Error('Failed to update file');
    }
  }
}

export default S3Service;
