// DOM (Document Object model)

/* the dom represent a documnt with a logical tree.it allows us to manipulate/change webpage content (HTML elements )
*/



    // By ID
    const heading = document.getElementById('heading');
    console.log("getElementById:", heading.innerText);

    // By Class Name
    const texts = document.getElementsByClassName('text');
    console.log("getElementsByClassName:", texts[0].innerText, "| Count:", texts.length);

    // By Tag Name
    const paragraphs = document.getElementsByTagName('p');
    console.log("getElementsByTagName:", paragraphs[1].innerText);

    // querySelector (first match)
    const firstText = document.querySelector('.text');
    console.log("querySelector (.text):", firstText.innerText);

    const headingByQuery = document.querySelector('#heading');
    console.log("querySelector (#heading):", headingByQuery.innerText);

    // querySelectorAll (all matches)
    const allParagraphs = document.querySelectorAll('p');
    allParagraphs.forEach((p, i) => {
      console.log(`querySelectorAll p[${i}]:`, p.innerText);
    });

    


     
