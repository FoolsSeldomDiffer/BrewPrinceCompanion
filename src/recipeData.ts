import { type Recipe } from './types';

const initialRecipe: Recipe = {
  id: "original",
  title: "The Brew of Nightmares",
  intro: "To complete the concoction and awaken the shadows, add the gifts of the night in this exact order:",
  steps: [
    {
      title: "The Purple Calm:",
      description: "Seek the scent of serenity in a field of lilac blooms. Pluck the sprigs that soothe one's sleep and cast them into the seething liquid.",
      ingredient: "lavender"
    },
    {
      title: "The Leap in the Dark:",
      description: "Add the limb of the croaker from the muddy pool, she who leaps when the moon hides behind the clouds.",
      ingredient: "frogleg"
    },
    {
      title: "The Shadow of the Sky:",
      description: "Take a gift from the messenger of death, as black as the night itself, fallen from a wing that never sings.",
      ingredient: "ravenfeather"
    },
    {
      title: "The Leathery Sailer:",
      description: "Finish with the membrane wing of the blind hunter who rests upon cave ceilings and only awakens when the light dies.",
      ingredient: "batwing"
    }
  ],
  additionalInstructions: [
    "Stir three times counter-clockwise after each ingredient.",
    "When the steam turns black, the brew is ready."
  ]
};

const recipe285913: Recipe = {
  id: "285913",
  title: "The Draught of Frozen Time",
  intro: "To halt the ticking clock and preserve a moment for eternity:",
  steps: [
    {
      title: "The Winter's Breath:",
      description: "A puff of frost captured from the beard of the Ice Giant king.",
      ingredient: "frostbreath"
    },
    {
      title: "The Petrified Song:",
      description: "A shard of crystal that resonates with the last note of a dying phoenix.",
      ingredient: "phoenixshard"
    },
    {
      title: "The Silver Silk:",
      description: "Webs spun by the moon-spiders during the longest night of the year.",
      ingredient: "moonsilk"
    }
  ],
  additionalInstructions: [
    "Cool in a bowl of mountain snow until it turns solid white.",
    "Do not stir once the frost begins to form."
  ]
};

const recipe510624: Recipe = {
  id: "510624",
  title: "The Essence of Liquid Gold",
  intro: "To transmute lead into fortune, follow the ancient path of the sun:",
  steps: [
    {
      title: "The Solar Flare:",
      description: "A drop of nectar from the Sun-flower that blooms only at high noon.",
      ingredient: "sunnectar"
    },
    {
      title: "The Serpent's Heart:",
      description: "The pulsing heart of a golden viper, freshly taken beneath the desert sun.",
      ingredient: "viperheart"
    },
    {
      title: "The Raven's Wing:",
      description: "A single feather from the bird that stole the sun from the sky.",
      ingredient: "ravenfeather"
    }
  ],
  additionalInstructions: [
    "Stir clockwise with a rod made of pure gold.",
    "Whisper your deepest desire into the steam."
  ]
};

const recipe741938: Recipe = {
  id: "741938",
  title: "The Elixir of Eternal Sight",
  intro: "To see that which is hidden from mortal eyes, prepare this glowing tonic:",
  steps: [
    {
      title: "The Golden Scale:",
      description: "Take the shimmering scale of the sun-drake, found only in the peaks of the Fire Mountain.",
      ingredient: "dragonscale"
    },
    {
      title: "The Midnight Drop:",
      description: "A single tear from the weeping willow that stands at the edge of the world.",
      ingredient: "willowtear"
    },
    {
      title: "The Eye of the Abyss:",
      description: "Add the dried pupil of the deep-sea lurker, preserved in brine for a century.",
      ingredient: "lurkereye"
    }
  ],
  additionalInstructions: [
    "Boil until the liquid glows with a soft golden hue.",
    "Strain through a cloth woven from spider silk."
  ]
};

export const allRecipes: Record<string, Recipe> = {
  "original": initialRecipe,
  "741938": recipe741938,
  "285913": recipe285913,
  "510624": recipe510624,
};
