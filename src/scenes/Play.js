class Play extends Phaser.Scene {
    constructor() {
		super("playScene");
        console.log("Play: constructor");
	}
	
	init(stats) {
		// happens once, flows top to bottom
		// can recive data when adding/starting new scene

        console.log('Play: init');

        this.HP = stats.HP;
        this.EXP = stats.EXP;
	}
	
	preload() {
		// happens once, flows top to bottom
	}
	
	// REQUIRED
	create() {
		// happens once, flows top to bottom
		// can receive data when adding/starting new scene

        console.log("Play: create");
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`);
	}
	
	update(time, delta) {
		// happens EVERY FRAME, flows top to bottom
		// automatically receives time/delta parameters
	}
}