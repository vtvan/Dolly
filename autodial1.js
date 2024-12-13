async function autoDial(phoneNumber)
{
   try
   {
      // Request access to the serial port
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });

      // Create a writer to send AT commands to the modem
      const encoder = new TextEncoderStream();
      const writableStreamClosed = encoder.readable.pipeTo(port.writable);
      const writer = encoder.writable.getWriter();

      // Send AT commands
      await writer.write('AT\r\n'); // Initialize
      await writer.write(`ATDT${phoneNumber}\r\n`); // Dial the number

      // Wait for a few seconds (simulate successful dialing)
      await new Promise(resolve => setTimeout(resolve, 5000));

      // Hang up
      await writer.write('ATH\r\n'); // Hang up

      // Close the writer and port
      writer.close();
      await writableStreamClosed;
      await port.close();

      console.log('Dialing sequence completed.');
   } catch (error)
   {
      console.error('Error communicating with the modem:', error);
   }
}

// Example usage
document.getElementById('autoDialButton').addEventListener('click', async () =>
{
   const phoneNumber = await fetchPhoneNumberFromAPI();
   autoDial(phoneNumber);
});

async function fetchPhoneNumberFromAPI()
{
   // Replace with your API endpoint
   const response = await fetch('/api/get-phone-number');
   const data = await response.json();
   return data.phoneNumber;
}
