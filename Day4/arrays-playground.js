export function findFamousCats(cats) {

    let maxFollowers = -1;
    let famousCats = [];
    for (const cat of cats) {
      const catFollowers = cat.followers.reduce((acum, followers) => acum + followers);
      console.log('Name: ' + cat.name + " " + catFollowers);
  
      if (catFollowers > maxFollowers) {
        famousCats = [cat.name];
        maxFollowers = catFollowers;
      } else if (catFollowers === maxFollowers) {
        famousCats.push(cat.name);
      }
    }
    return famousCats;
  }
  