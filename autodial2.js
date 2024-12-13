// Check if the browser supports the Web Serial API
if ('serial' in navigator)
{
   // Request a port and open a connection
   navigator.serial.requestPort().then(async (port) =>
   {
      await port.open({ baudRate: 9600 }); // Set appropriate baud rate for your modem
      const textEncoder = new TextEncoderStream();
      const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
      const writer = textEncoder.writable.getWriter();

      // Send AT command to dial the number
      const phoneNumber = 'ATDT' + selectedPhoneNumber + '\r';
      await writer.write(phoneNumber);

      // Wait a few seconds before hanging up
      setTimeout(async () =>
      {
         await writer.write('ATH\r');
         writer.close();
         await writableStreamClosed;
         await port.close();
      }, 5000); // Adjust delay as needed
   }).catch((error) =>
   {
      console.error('Error accessing serial port:', error);
   });
} else
{
   console.error('Web Serial API not supported in this browser.');
}
