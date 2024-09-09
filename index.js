import axios from "axios";

// Configura los parámetros del repositorio
const owner = 'Miguel-Giraldo-Duque'; // Reemplaza con el nombre del usuario o la organización
const repo = 'Repo_Articles';     // Reemplaza con el nombre del repositorio
const path = '';                  // Deja vacío para la raíz o especifica una ruta específica

let ArrArticles = []


// Función para obtener todos los archivos de un directorio
async function getMarkdownFiles(owner, repo, path) {
  try {
    // URL de la API de GitHub para listar archivos en un directorio
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    
    // Solicitud para obtener el contenido del directorio
    const response = await axios.get(url);
    const files = response.data;

    // Filtra los archivos que son de tipo Markdown
    const markdownFiles = files.filter(file => file.type === 'file' && file.name.endsWith('.md'));

    // Obtén el contenido de cada archivo Markdown
    for (const file of markdownFiles) {
      const fileContent = await axios.get(file.download_url)
      let content = ArrArticles.push({name:file.name, content: fileContent.data})
        
        console.log(content)
    }
  } catch (error) {
    console.error('Error al obtener los archivos:', error);
  }
}

// Llama a la función
getMarkdownFiles(owner, repo, path);

