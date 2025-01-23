import { createHatchetClient } from 'hatchet';
// Import additional items if needed, e.g. type definitions

// Example function to encode a file into base64
function encodeFileToBase64(filePath: string): string {
  // Here you'd implement real "read file & convert" logic.
  // Using a placeholder for demonstration.
  return 'BASE64_ENCODED_FILE';
}

// Example function to decode a base64 string and write to a file
function decodeBase64ToFile(base64Data: string, destinationPath: string): void {
  // Here you'd implement real "decode & write" logic.
  // Using a placeholder for demonstration.
  console.log(`Decoded base64 to file at: ${destinationPath}`);
}

(async () => {
  const hatchet = createHatchetClient('my-api-key');
  console.log('Starting file streaming with base64 encoding...');

  // Example usage with base64
  const filePath = 'path/to/input/file.txt';
  const base64Content = encodeFileToBase64(filePath);
  console.log('Encoded file to base64:', base64Content);

  // Potentially do something with base64Content, like send to a remote server

  // Then decode it back into a file
  const destinationPath = 'path/to/output/file.txt';
  decodeBase64ToFile(base64Content, destinationPath);
  console.log('Completed file streaming with base64 encoding');
})();