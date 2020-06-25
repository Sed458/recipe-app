import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { Step } from './step';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Spaghetti', makeTime: 30, imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg' },
      { id: 12, name: 'Roast Chicken', makeTime: 30, imageUrl: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/10/roasted-chicken-4.jpg' },
      { id: 13, name: 'Shepherd\'s Pie', makeTime: 30, imageUrl: 'https://www.chelseasmessyapron.com/wp-content/uploads/2018/09/Shepherds-Pie5.jpg' },
      { id: 14, name: 'Stir Fry', makeTime: 30, imageUrl: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry-500x500.jpg' },
      { id: 15, name: 'Noodle Soup', makeTime: 30, imageUrl: 'https://healthynibblesandbits.com/wp-content/uploads/2019/10/Chinese-Chicken-Broth-FF.jpg' },
      { id: 16, name: 'Pancakes', makeTime: 30, imageUrl: 'https://www.graceandgoodeats.com/wp-content/uploads/2015/01/best-ever-homemade-pancakes-500x500.jpg' },
      { id: 17, name: 'Chocolate Cake', makeTime: 30, imageUrl: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg' },
      { id: 18, name: 'Chicken Pie', makeTime: 30, imageUrl: 'https://recipetineats.com/wp-content/uploads/2018/10/Chicken-Pot-Pie_2.jpg' },
      { id: 19, name: 'Chicken Curry', makeTime: 30, imageUrl: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?crop=1.00xw:0.750xh;0,0.159xh&resize=1200:*' },
      { id: 20, name: 'Apple Crumble', makeTime: 30, imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2006/8/16/0/da0313_apple1.jpg.rend.hgtvcom.826.620.suffix/1558102164829.jpeg' }
    ];

    const ingredients = [
      { id: 11, name: 'Ground Beef', recipe_id: 11, quantity: "1 pound" },
      { id: 12, name: "Onion", recipe_id: 11, quantity: "1 chopped" },
      { id: 13, name: "Garlic", recipe_id: 11, quantity: "4 cloves" },
      { id: 14, name: "Small Green Bell Pepper", recipe_id: 11, quantity: "1 diced" },
      { id: 15, name: "Diced Tomatoes", recipe_id: 11, quantity: "1 (28 ounce) can" },
      { id: 16, name: "Tomatoe Sauce", recipe_id: 11, quantity: "1 (16 ounce) can" },
      { id: 17, name: "Tomatoe Paste", recipe_id: 11, quantity: "1 (6 ounce) can" },
      { id: 18, name: "Dried Oregano", recipe_id: 11, quantity: "2 teaspoons" },
      { id: 19, name: "Dried Basil", recipe_id: 11, quantity: "2 teaspoons" },
      { id: 20, name: "Salt", recipe_id: 11, quantity: "1 teaspoon" },
      { id: 21, name: "Black Pepper", recipe_id: 11, quantity: "1/2 teaspoon" },
      { id: 13, name: "Chocolate Bar", recipe_id: 12, quantity: "1" },
      { id: 14, name: "Butter", recipe_id: 13, quantity: "1" },
    ];

    const steps = [
      { id: 11, title: 'Decide how much pasta to cook', description: "1nwienfiwnoefnwienfinwef", step_number: 1, images: ["https://www.wikihow.com/images/thumb/d/d7/Cook-Spaghetti-Step-2-Version-2.jpg/aid724792-v4-728px-Cook-Spaghetti-Step-2-Version-2.jpg.webp"], videos: [], recipe_id: 11 },
      { id: 12, title: 'Fill a large pot with cold or cool water', description: "2nwienfiwnoefnwienfinwef", step_number: 2, images: ["https://www.wikihow.com/images/thumb/2/21/Make-Spaghetti-Step-2-Version-7.jpg/aid724792-v4-728px-Make-Spaghetti-Step-2-Version-7.jpg.webp"], videos: [], recipe_id: 11 },
      { id: 13, title: 'Add salt and bring water to a boil', description: "3nwienfiwnoefnwienfinwef", step_number: 3, images: [], videos: ["https://www.wikihow.com/video/7/7b/Make%20Spaghetti%20Step%203%20Version%206.360p.mp4"], recipe_id: 11 },
      { id: 14, title: 'Stir the spaghetti into the boiling water', description: "4nwienfiwnoefnwienfinwef", step_number: 4, images: [], videos: ["https://www.wikihow.com/video/c/c5/Make%20Spaghetti%20Step%204%20Version%207.360p.mp4"], recipe_id: 11 },
      { id: 15, title: 'Set a timer to 8 to 11 minutes and stir noodles frequently', description: "5nwienfiwnoefnwienfinwef", step_number: 5, images: [], videos: ["https://www.wikihow.com/video/a/a6/Make%20Spaghetti%20Step%205%20Version%207.360p.mp4"], recipe_id: 11 },
      { id: 16, title: 'Test the spaghetti to see if it\'s as soft as you like', description: "6nwienfiwnoefnwienfinwef", step_number: 6, images: [], videos: ["https://www.wikihow.com/video/4/42/Make%20Spaghetti%20Step%206%20Version%207.360p.mp4"], recipe_id: 11 },
      { id: 17, title: 'Drain the cooked spaghetti using a colander', description: "7nwienfiwnoefnwienfinwef", step_number: 7, images: ["https://www.wikihow.com/images/thumb/e/ea/Make-Spaghetti-Step-7-Version-7.jpg/aid724792-v4-728px-Make-Spaghetti-Step-7-Version-7.jpg.webp"], videos: [], recipe_id: 11 },
      { id: 18, title: 'Top the noodles with your favorite sauce and serve', description: "8nwienfiwnoefnwienfinwef", step_number: 8, images: ["https://www.wikihow.com/images/thumb/2/2e/Make-Spaghetti-Step-24-Version-2.jpg/aid724792-v4-728px-Make-Spaghetti-Step-24-Version-2.jpg.webp"], videos: [], recipe_id: 11 },
    ];
    return { recipes, ingredients, steps };
  }

  genId<T extends Recipe | Step | Ingredient>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
