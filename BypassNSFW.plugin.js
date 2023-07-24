/**
     * @name BypassNSFW
     * @author Shifts
     * @authorId 994717305542021244
     * @description View Discord NSFW-Gated content without meeting the required age requirement.
     * @version 1.0.0
     * @source https://github.com/ignshifts/BypassNSFW
     * @updateUrl https://github.com/ignshifts/BypassNSFW/raw/main/BypassNSFW.plugin.js
*/
    module.exports = class Bypass {

        start() {

            // temp 
            setInterval(async () => {
              await patch()

            }, 5000);


            async function patch() {
                const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
                UserStore.nsfwAllowed = true;

                if (UserStore.nsfwAllowed == false) {
                    UserStore.nsfwAllowed = true;
                }
            }

        }

        stop() {
            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = false;


        };
}
