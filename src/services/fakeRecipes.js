const recipes = [
  {
    title: "banana split",
    prep_time: 5,
    craft_time: 5,
    ingredients: ["banana", "ice cream", "whipping cream"],
    directions: [
      "Cut a banana",
      "Scoop ice cream",
      "Put whipping cream on top of banana and ice cream",
    ],
    category: "food",
  },
  {
    title: "banana smoothie",
    prep_time: 5,
    craft_time: 2,
    ingredients: ["banana", "strawberry", "milk", "ice"],
    directions: [
      "Put ingredients into a blender",
      "Blend",
      "Pour into a cup and serve",
    ],
    category: "food",
  },
  {
    title: "banana fertilizer",
    prep_time: 2,
    craft_time: 0,
    ingredients: ["banana"],
    directions: ["Throw banana peel at your garden"],
    category: "life hack",
  },
  {
    title: "coffee air freshener",
    prep_time: 10,
    craft_time: null,
    ingredients: ["coffee ground", "paper filter", "string"],
    directions: [
      "Put coffee ground in paper filter",
      "Wrap paper filter with string",
    ],
    category: "life hack",
  },
  {
    title: "avocado",
    prep_time: 15,
    craft_time: null,
    ingredients: ["avocado", "bowl"],
    directions: ["Smash avocado into a bowl", "Apply on the face"],
    category: "life hack",
  },
];

export function getRecipes() {
  return recipes;
}
