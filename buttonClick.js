async function copyCode() {
        // Get the element
            const codeElement = document.querySelector("code");
                // Get the text content
                    const textToCopy = codeElement.textContent;

                            try {
                                    // Write the text to the clipboard
                                            await navigator.clipboard.writeText(textToCopy);
                                                    console.log('Content successfully copied');
                                                    alert("Copied!")

                                                            // Show a temporary message
                                                                                                    } catch (err) {
                                                                                                            console.error('Copy operation failed:', err);
                                                                                                                    alert("Failed to copy text.");
                                                                                                                        }
                                                                                                                        }