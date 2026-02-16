// ============================================
// CHATGPT UNLIMITED - COMPLETE FIX SCRIPT
// ============================================
// This script enhances ChatGPT by:
// 1. Enabling the disabled submit button
// 2. Hiding GPT-5/Plus promotional banners
// 3. Removing specific UI elements
// 4. Activating the entire form
// 5. Adding Enter key to send messages
// ============================================

(function() {
    
    // ========== 1. ACTIVATE SUBMIT BUTTON ==========
    // Finds the submit button and removes any 'disabled' attribute
    // This allows sending messages even when ChatGPT tries to block it
    function activerBoutonSiNecessaire() {
        const button = document.getElementById('composer-submit-button');
        if (!button) return false;
        
        // Check if button is disabled (either via attribute or property)
        const estDesactive = button.hasAttribute('disabled') || button.disabled;
        
        if (estDesactive) {
            button.removeAttribute('disabled');
            button.disabled = false;
            return true;
        }
        
        return false;
    }
    
    // ========== 2. HIDE GPT-5 PROMOTIONAL MESSAGES ==========
    // Targets and hides annoying banners about "Want to keep using GPT-5"
    // Uses multiple selectors to catch different variations of the banner
    function masquerMessageGPT5() {
        const selecteurs = [
            'aside.flex.w-full.items-start',
            'div.rounded-3xl.border',
            '.mb-2 .pt-2 aside',
            'div[class*="rounded-3xl"]:has(h3)'
        ];
        
        let messagesMasques = 0;
        
        // First attempt: Use specific selectors
        selecteurs.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                const texte = element.textContent || '';
                if (texte.includes('Want to keep using GPT-5') || 
                    texte.includes('Try Plus for free')) {
                    
                    // Completely hide the element
                    element.style.display = 'none';
                    element.style.opacity = '0';
                    element.style.visibility = 'hidden';
                    
                    messagesMasques++;
                }
            });
        });
        
        // Fallback: More general search if first attempt fails
        if (messagesMasques === 0) {
            document.querySelectorAll('aside, div.border').forEach(element => {
                const texte = element.textContent || '';
                if ((texte.includes('Want to keep using GPT-5') || 
                     texte.includes('Try Plus for free')) &&
                    !element.closest('.markdown')) { // Exclude main content
                    
                    element.style.display = 'none';
                }
            });
        }
        
        return messagesMasques > 0;
    }
    
    // ========== 3. HIDE FIRST SPECIFIC ELEMENT ==========
    // Targets and hides the element with class:
    // "flex grow flex-col md:flex-row md:items-center md:justify-between md:gap-8"
    function masquerElementSpecifique1() {
        const selecteursSpecifiques = [
            '.flex.grow.flex-col.md\\:flex-row.md\\:items-center.md\\:justify-between.md\\:gap-8',
            'div[class*="flex grow flex-col md:flex-row md:items-center md:justify-between"]',
            'div.md\\:flex-row.md\\:items-center.md\\:justify-between'
        ];
        
        let elementsMasques = 0;
        
        // Try each selector
        selecteursSpecifiques.forEach(selector => {
            try {
                document.querySelectorAll(selector).forEach(element => {
                    if (element.className.includes('flex') && 
                        element.className.includes('grow') && 
                        element.className.includes('flex-col') && 
                        element.className.includes('md:flex-row')) {
                        
                        element.style.display = 'none';
                        element.style.opacity = '0';
                        element.style.visibility = 'hidden';
                        
                        elementsMasques++;
                    }
                });
            } catch(e) {}
        });
        
        // Fallback: Search by partial class names
        if (elementsMasques === 0) {
            document.querySelectorAll('div[class*="flex"]').forEach(element => {
                const classes = element.className || '';
                if (classes.includes('md:flex-row') && 
                    classes.includes('md:items-center') && 
                    classes.includes('md:justify-between') &&
                    classes.includes('flex-col')) {
                    
                    element.style.display = 'none';
                }
            });
        }
        
        return elementsMasques > 0;
    }
    
    // ========== 4. HIDE SECOND SPECIFIC ELEMENT ==========
    // Targets the banner element with classes:
    // "flex w-full items-start gap-4 rounded-3xl border py-4 ps-5 pe-3 text-sm [text-wrap:pretty]..."
    function masquerElementSpecifique2() {
        const selecteurs = [
            '.flex.w-full.items-start.gap-4.rounded-3xl.border.py-4.ps-5.pe-3.text-sm',
            'div[class*="flex w-full items-start gap-4 rounded-3xl border"]',
            'aside.flex.w-full.items-start.gap-4.rounded-3xl',
            'div[class*="rounded-3xl border py-4 ps-5 pe-3"]',
            '.flex.w-full.items-start.gap-4.rounded-3xl.border.py-4.ps-5.pe-3.text-sm.\\[text-wrap\\:pretty\\]',
            'div[class*="text-wrap:pretty"]'
        ];
        
        let elementsMasques = 0;
        
        // Try all selectors
        selecteurs.forEach(selector => {
            try {
                document.querySelectorAll(selector).forEach(element => {
                    const classes = element.className || '';
                    const texte = element.textContent || '';
                    
                    if ((classes.includes('rounded-3xl') && 
                         classes.includes('border') && 
                         classes.includes('py-4') &&
                         classes.includes('ps-5') &&
                         classes.includes('pe-3')) ||
                        (texte.includes('Want to keep using GPT-5') || 
                         texte.includes('Try Plus for free'))) {
                        
                        // Aggressive hiding: remove all traces
                        element.style.display = 'none';
                        element.style.opacity = '0';
                        element.style.visibility = 'hidden';
                        element.style.height = '0';
                        element.style.overflow = 'hidden';
                        element.style.margin = '0';
                        element.style.padding = '0';
                        
                        elementsMasques++;
                    }
                });
            } catch(e) {}
        });
        
        // Final fallback
        if (elementsMasques === 0) {
            document.querySelectorAll('aside, div[class*="rounded-3xl"]').forEach(element => {
                const classes = element.className || '';
                const texte = element.textContent || '';
                
                if ((classes.includes('border') && classes.includes('py-4')) ||
                    texte.includes('Want to keep using GPT-5') ||
                    texte.includes('Try Plus for free')) {
                    
                    element.style.display = 'none';
                    elementsMasques++;
                }
            });
        }
        
        return elementsMasques > 0;
    }
    
    // ========== 5. ACTIVATE THE ENTIRE FORM ==========
    // Finds the main form and enables all its elements
    // Removes disabled attributes from textareas, buttons, file inputs
    function activerFormulaire() {
        const formulaire = document.querySelector('form.group\\/composer');
        if (!formulaire) return false;
        
        // Remove disabled attribute from form itself
        if (formulaire.hasAttribute('disabled')) {
            formulaire.removeAttribute('disabled');
        }
        
        // Enable all textareas and contenteditable divs
        const textareas = formulaire.querySelectorAll('textarea, div[contenteditable="true"]');
        textareas.forEach(textarea => {
            if (textarea.hasAttribute('disabled')) {
                textarea.removeAttribute('disabled');
            }
            if (textarea.getAttribute('contenteditable') === 'false') {
                textarea.setAttribute('contenteditable', 'true');
            }
        });
        
        // Enable all buttons inside the form
        const boutons = formulaire.querySelectorAll('button');
        boutons.forEach(bouton => {
            if (bouton.hasAttribute('disabled') || bouton.disabled) {
                bouton.removeAttribute('disabled');
                bouton.disabled = false;
            }
        });
        
        // Enable file input fields
        const fileInputs = formulaire.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            if (input.hasAttribute('disabled')) {
                input.removeAttribute('disabled');
            }
            if (input.hasAttribute('tabindex') && input.getAttribute('tabindex') === '-1') {
                input.removeAttribute('tabindex');
            }
        });
        
        // Force visual styles to ensure form is usable
        formulaire.style.opacity = '1';
        formulaire.style.pointerEvents = 'auto';
        formulaire.style.display = 'block';
        
        return true;
    }
    
    // ========== 6. ENTER KEY TO SEND FUNCTIONALITY ==========
    // Adds event listener to send message when Enter is pressed
    // Shift+Enter still creates a new line (default behavior)
    function activerEnvoiParEntree() {
        const textarea = document.querySelector('div[contenteditable="true"]');
        if (!textarea) return;
        
        // Remove old listeners to prevent duplicates
        textarea.removeEventListener('keydown', handleEnterKey);
        
        // Add new listener
        textarea.addEventListener('keydown', handleEnterKey);
    }
    
    // Handler function for Enter key press
    function handleEnterKey(e) {
        // Check if it's Enter key without Shift
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent default new line
            
            // Find and click the submit button
            const submitButton = document.getElementById('composer-submit-button');
            if (submitButton && !submitButton.disabled) {
                submitButton.click();
            }
        }
        // If Shift+Enter is pressed, default behavior (new line) remains
    }
    
    // ========== 7. MAIN FUNCTION ==========
    // Executes all fixes in one call
    function executerTousLesCorrectifs() {
        activerBoutonSiNecessaire();    // Enable submit button
        masquerMessageGPT5();            // Hide GPT-5 banners
        masquerElementSpecifique1();     // Hide first specific element
        masquerElementSpecifique2();     // Hide second specific element
        activerFormulaire();             // Activate entire form
        activerEnvoiParEntree();         // Add Enter key functionality
    }
    
    // ========== 8. INITIALIZATION ==========
    // Run all fixes immediately
    executerTousLesCorrectifs();
    
    // Set up periodic check (every 800ms) to catch dynamically added elements
    const intervalId = setInterval(executerTousLesCorrectifs, 800);
    
    // Use MutationObserver to detect DOM changes and react immediately
    const observer = new MutationObserver(() => {
        executerTousLesCorrectifs();
    });
    
    // Observe the entire document for changes
    observer.observe(document.body, { 
        childList: true,        // Watch for added/removed elements
        subtree: true,          // Watch all descendants
        attributes: true,       // Watch for attribute changes
        attributeFilter: ['class', 'style', 'disabled', 'contenteditable', 'tabindex']
    });
    
    // ========== 9. CONTROL FUNCTIONS ==========
    // Expose control functions to the global scope
    window._chatGPTFix = {
        // Stop all fixes
        arreter: function() {
            clearInterval(intervalId);
            observer.disconnect();
            
            // Clean up event listener
            const textarea = document.querySelector('div[contenteditable="true"]');
            if (textarea) {
                textarea.removeEventListener('keydown', handleEnterKey);
            }
        },
        // Reactivate fixes
        reactiver: function() {
            executerTousLesCorrectifs();
        }
    };
    
})();

console.log("✨ ChatGPT Unlimited - Created by Hicham ✨");
// created by Hicham