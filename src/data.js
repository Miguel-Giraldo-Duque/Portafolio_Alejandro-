import axios from 'axios';
import { v4 as uuidv4  } from 'uuid'

export const allowedTags = ["All","AI", "Quantum", "Graphs"];

// const repoOwner = 'Miguel-Giraldo-Duque';
// const repoName = 'Repo_Articles';
// const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents`;

// const  callText  = async () =>{

//     const response = await axios.get(apiUrl)

//     const markdownFiles = response.data.filter(file => file.name.endsWith('.md'));

//     console.log(markdownFiles[0])
// } 

// callText()

class Article {
    constructor({id,author,position, tags, title, fecha, readTime,  briefDescription , contentArticle}) {
        // Validación de tags
        this.id = id ||  uuidv4()
        this.position = position || "Data engineer Quantum developer"
        this.author = author ||  "Alejandro Giraldo Londoño"
        this.tags = tags.every(tag => allowedTags.includes(tag)) ? tags : [];
        // Inicialización de otros campos
        this.title = title || "Untitled";
        this.fecha = fecha || "Unknown date";
        this.readTime = readTime || "0min";
        this.briefDescription = briefDescription || "";
        this.contentArticle = contentArticle || ""
    }
}

// Datos de ejemplo usando la clase Article
export const data = [
    new Article({
        id: Math.random * 100 + "miguelito",
        tags: ["AI", "Quantum"],
        title: "Exploring the Quantum Realm",
        fecha: "August 23, 2024",
        readTime: "5min",
        briefDescription: "An insightful journey into quantum mechanics and its implications for artificial intelligence.",
        contentArticle: "the content",
    }),
    new Article({
        
        tags: ["AI", "Graphs"],
        title: "AI and Graph Theory",
        fecha: "August 22, 2024",
        readTime: "4min",
        briefDescription: "How AI algorithms are leveraging graph theory to solve complex problems in network analysis.",
        contentArticle: "the content",
     
    }),
    new Article({
        
        id: uuidv4(),
        tags: ["Quantum", "Graphs"],
        title: "Quantum Computing in Graphs",
        fecha: "August 21, 2024",
        readTime: "6min",
        briefDescription: "Exploring the use of quantum computing techniques in optimizing graph-based computations.",
        contentArticle: "the content",
      
    }),
    new Article({
        
        id: uuidv4(),
        tags: ["AI"],
        title: "The Future of hope",
        fecha: "August 20, 2024",
        readTime: "7min",
        briefDescription: "A deep dive into the future trends of artificial intelligence and its potential impact on society.",
        contentArticle: "the content",
       
    }),
    new Article({
        
        id: uuidv4(),
        tags: ["Graphs"],
        title: "Understanding Graphs",
        fecha: "August 19, 2024",
        readTime: "3min",
        briefDescription: "A beginner's guide to understanding the basics of graph theory and its applications.",
        contentArticle: `## Exploring Quantum Mechanics


Quantum physics can seem intimidating at first, but it's a fascinating field with profound implications.  

Understanding the basics is essential for grasping more complex concepts later on.  



**1. Introduction to Quantum Mechanics**
\n
\n
Quantum mechanics is the branch of physics that deals with the behavior of particles at the atomic and subatomic levels.  
\n
\n
It fundamentally changes our understanding of how the universe operates.  


**2. Wave-Particle Duality**

One of the key principles is **wave-particle duality**.  
This concept suggests that particles like electrons exhibit both wave-like and particle-like properties.  
This duality is crucial in understanding phenomena such as interference and diffraction.  

**3. Key Concepts**

* **Superposition**: Particles can exist in multiple states at once until measured.  

* **Entanglement**: Particles can be interconnected such that the state of one immediately affects the state of another, no matter the distance.  

**4. Real-World Applications**

Quantum mechanics isn't just theoretical; it has practical applications in technology.  

For example, **quantum computing** leverages these principles to perform calculations far beyond classical computers.  

Another application is in **quantum cryptography**, which ensures secure communication based on quantum principles.  

**5. Further Reading**

For those interested in diving deeper, consider exploring these resources:  

- [Quantum Mechanics for Dummies](https://example.com/quantum-mechanics-for-dummies)  

- [Understanding Quantum Physics](https://example.com/understanding-quantum-physics)  

By exploring these concepts, you'll gain a clearer insight into how quantum mechanics shapes our understanding of t
` ,
    }),
    {
        id:uuidv4(), 
        tags: ["Quantum"],
        title: "Quantum Physics Simplified",
        fecha: "August 18, 2024",
        readTime: "5min",
        briefDescription: "Simplifying the complex concepts of quantum physics for the average reader.",
        contentArticle: "the content",
      
    }
]