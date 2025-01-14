class MainMenu extends Phaser.Scene {
    constructor() {
		super("mainmenuScene");
        console.log("MainMenu: constructor");
	}
	
	init() {
		// happens once, flows top to bottom
		// can recive data when adding/starting new scene

        console.log("MainMenu: init");
        this.HP = 100;
        this.EXP = 0;
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
	}
	
	preload() {
		// happens once, flows top to bottom
	}
	
	// REQUIRED
	create() {
		// happens once, flows top to bottom
		// can receive data when adding/starting new scene

        console.log("MainMenu: create");

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP,
        };

        this.scene.start("playScene", playerStats);
	}
	
	update(time, delta) {
		// happens EVERY FRAME, flows top to bottom
		// automatically receives time/delta parameters
	}
}