const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9];
const selectedIndex = null;

imageIndexes.forEach(i => {
  const image = document.createElement('img');
  image.src = `/images/family_${i}.jpg`;
  image.alt = `Cover for Family ${i} of the Family Image Gallery`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    selectedImage.src = `/images/family_${i}.jpg`;
  });

  gallery.appendChild(image);
});