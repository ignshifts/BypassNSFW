/**
     * @name BypassNSFW
     * @author Shifts
     * @authorId 994717305542021244
     * @description View Discord NSFW-Gated content without meeting the required age requirement.
     * @version 1.0.0
     * @invite 48qbg6UP9g
     * @source https://github.com/ignshifts/BypassNSFW
     * @updateUrl https://github.com/ignshifts/BypassNSFW/raw/main/BypassNSFW.plugin.js
*/
    module.exports = class Bypass {

        start() {

            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = true;

            if(UserStore.nsfwAllowed == false) {
                UserStore.nsfwAllowed = true;
            } else {
                 BdApi.showToast('NSFW is now enabled!', {type: "success"});
            }


        }

        stop() {
            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = false;


        };
}
