'use strict';
window.onload = () => {
    let deferredInstallPrompt = null;

    window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

    document.getElementById('btnInstall').addEventListener('click', installPWA);

    window.addEventListener('appinstalled', logAppInstalled);

    function saveBeforeInstallPromptEvent(evt) {
        deferredInstallPrompt = evt;
        installButton.removeAttribute('hidden');
    }

    function installPWA(evt) {
        deferredInstallPrompt.prompt();
        evt.srcElement.setAttribute('hidden', true);
    }

    function logAppInstalled(evt) {
        console.log('ProjetoDDM App was installed.', evt);
    }

}