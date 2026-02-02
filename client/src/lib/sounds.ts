import { Howl } from "howler";

const SOUND_CACHE_VERSION = "v2";

const sounds: Record<string, Howl> = {};

function cacheBust(url: string): string {
  return `${url}?${SOUND_CACHE_VERSION}`;
}

function createSound(name: string, src: string, options: Partial<{ volume: number; loop: boolean }> = {}) {
  sounds[name] = new Howl({
    src: [cacheBust(src)],
    volume: options.volume ?? 0.5,
    loop: options.loop ?? false,
  });
}

createSound("hit", "/sounds/hit.mp3", { volume: 0.6 });
createSound("success", "/sounds/success.mp3", { volume: 0.7 });

const backgroundMusic = new Howl({
  src: [cacheBust("/sounds/background music.mp3")],
  volume: 0.15,
  loop: true,
});

let backgroundMusicId: number | null = null;

export function startBackgroundMusic() {
  if (backgroundMusicId === null) {
    backgroundMusicId = backgroundMusic.play();
    console.log("Background music started");
  }
}

export function stopBackgroundMusic() {
  if (backgroundMusicId !== null) {
    backgroundMusic.stop(backgroundMusicId);
    backgroundMusicId = null;
    console.log("Background music stopped");
  }
}

export function setBackgroundMusicVolume(volume: number) {
  backgroundMusic.volume(volume);
}

const sniperShootSound = new Howl({
  src: [cacheBust("/sounds/sniper sound.mp3")],
  volume: 0.8,
});

const sniperReloadSound = new Howl({
  src: [cacheBust("/sounds/sniper reload sound.mp3")],
  volume: 0.7,
});

const pistolShootSound = new Howl({
  src: [cacheBust("/sounds/pistol sound.mp3")],
  volume: 0.8,
});

const pistolReloadSound = new Howl({
  src: [cacheBust("/sounds/pistol reload sound.mp3")],
  volume: 0.7,
});

const victorySound = new Howl({
  src: [cacheBust("/sounds/victory.mp3")],
  volume: 0.8,
});

const loseSound = new Howl({
  src: [cacheBust("/sounds/lose.mp3")],
  volume: 0.8,
});

const arcticWhiteShootSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/arctic white sound.mp3")],
  volume: 0.8,
});

const arcticWhiteReloadSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/arctic white reload.mp3")],
  volume: 0.7,
});

const bloodMoonShootSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/blood moon sound.mp3")],
  volume: 0.8,
});

const bloodMoonReloadSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/blood moon reload.mp3")],
  volume: 0.7,
});

const bloodMoonScopeSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/blood moon scope.mp3")],
  volume: 0.6,
});

const cyberStrikeShootSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/cyber strike sound.mp3")],
  volume: 0.8,
});

const cyberStrikeReloadSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/cyber strike reload.mp3")],
  volume: 0.7,
});

const cyberStrikeScopeSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/cyber strike scope.mp3")],
  volume: 0.6,
});

const voidReaperShootSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/void reaper sound.mp3")],
  volume: 0.8,
});

const voidReaperReloadSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/void reaper reload.mp3")],
  volume: 0.7,
});

const voidReaperScopeSound = new Howl({
  src: [cacheBust("/sounds/skins sounds/void reaper scope.mp3")],
  volume: 0.6,
});

const carbonBlackShootSound = new Howl({
  src: [cacheBust("/sounds/carbon black sound.mp3")],
  volume: 0.8,
});

const carbonBlackReloadSound = new Howl({
  src: [cacheBust("/sounds/carbon black reload.mp3")],
  volume: 0.7,
});

const goldPlatedShootSound = new Howl({
  src: [cacheBust("/sounds/gold plated sound.mp3")],
  volume: 0.8,
});

const goldPlatedReloadSound = new Howl({
  src: [cacheBust("/sounds/gold plated reload.mp3")],
  volume: 0.7,
});

const dragonFireShootSound = new Howl({
  src: [cacheBust("/sounds/dragon fire sound.mp3")],
  volume: 0.8,
});

const dragonFireReloadSound = new Howl({
  src: [cacheBust("/sounds/dragon fire reload.mp3")],
  volume: 0.7,
});

const neonPulseShootSound = new Howl({
  src: [cacheBust("/sounds/neon pulse sound.mp3")],
  volume: 0.8,
});

const neonPulseReloadSound = new Howl({
  src: [cacheBust("/sounds/neon pulse reload.mp3")],
  volume: 0.7,
});

const skinShootSounds: Record<string, Howl> = {
  "sniper_basic": sniperShootSound,
  "sniper_arctic_white": arcticWhiteShootSound,
  "sniper_blood_moon": bloodMoonShootSound,
  "sniper_cyber_strike": cyberStrikeShootSound,
  "sniper_void_reaper": voidReaperShootSound,
};

const skinReloadSounds: Record<string, Howl> = {
  "sniper_basic": sniperReloadSound,
  "sniper_arctic_white": arcticWhiteReloadSound,
  "sniper_blood_moon": bloodMoonReloadSound,
  "sniper_cyber_strike": cyberStrikeReloadSound,
  "sniper_void_reaper": voidReaperReloadSound,
};

const skinScopeSounds: Record<string, Howl> = {
  "sniper_blood_moon": bloodMoonScopeSound,
  "sniper_cyber_strike": cyberStrikeScopeSound,
  "sniper_void_reaper": voidReaperScopeSound,
};

const pistolSkinShootSounds: Record<string, Howl> = {
  "pistol_basic": pistolShootSound,
  "pistol_carbon_black": carbonBlackShootSound,
  "pistol_gold_plated": goldPlatedShootSound,
  "pistol_dragon_fire": dragonFireShootSound,
  "pistol_neon_pulse": neonPulseShootSound,
};

const pistolSkinReloadSounds: Record<string, Howl> = {
  "pistol_basic": pistolReloadSound,
  "pistol_carbon_black": carbonBlackReloadSound,
  "pistol_gold_plated": goldPlatedReloadSound,
  "pistol_dragon_fire": dragonFireReloadSound,
  "pistol_neon_pulse": neonPulseReloadSound,
};

export function playSound(name: string) {
  if (sounds[name]) {
    sounds[name].play();
  }
}

export function playSniperShoot(skinId?: string | null) {
  const sound = skinId && skinShootSounds[skinId] ? skinShootSounds[skinId] : sniperShootSound;
  sound.play();
}

export function playSniperReload(skinId?: string | null) {
  const sound = skinId && skinReloadSounds[skinId] ? skinReloadSounds[skinId] : sniperReloadSound;
  sound.play();
}

export function playSniperScope(skinId?: string | null) {
  if (skinId && skinScopeSounds[skinId]) {
    skinScopeSounds[skinId].play();
  }
}

export function playPistolShoot(skinId?: string | null) {
  const sound = skinId && pistolSkinShootSounds[skinId] ? pistolSkinShootSounds[skinId] : pistolShootSound;
  sound.play();
}

export function playPistolReload(skinId?: string | null) {
  const sound = skinId && pistolSkinReloadSounds[skinId] ? pistolSkinReloadSounds[skinId] : pistolReloadSound;
  sound.play();
}

export function playHit() {
  if (sounds["hit"]) {
    sounds["hit"].play();
  }
}

export function playVictory() {
  stopBackgroundMusic();
  victorySound.play();
}

export function playLose() {
  stopBackgroundMusic();
  loseSound.play();
}

export { sounds };
