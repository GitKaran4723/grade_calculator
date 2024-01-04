const text = "Welcome to the Grade Calculator"; // The text to be typed
let i = 0; // Counter variable to keep track of the letter index

function typeLetter() {
  if (i <= text.length) {
    document.getElementById('text-container').innerText = text.substring(0, i); // Update the text content
    i++;
    setTimeout(typeLetter, 75); // Wait 100 milliseconds before typing the next letter
  } else {
    // Once the text is fully typed, remove the cursor by setting borderRight to "0px"
    document.getElementById('text-container').style.borderRight = "0px";
    
    // Select the portion of the text to style
    const styledText = document.getElementById('text-container').childNodes[0].substringData(15, 16);

    // Wrap the styled text in a <span> element
    const span = document.createElement('span');
    span.innerText = styledText;

    // Apply the desired styles to the <span> element
    span.style.color = "red";
    span.style.fontSize = "1.5em";

    // Replace the original text with the styled text
    const textContainer = document.getElementById('text-container');
    textContainer.replaceChild(span, textContainer.childNodes[0].splitText(15));
  }
}
typeLetter(); // Start typing the letters one by one

const open_b = document.getElementById("continue_yes");
open_b.addEventListener('click', function (e) {
  location="Allsemester.html";
});

