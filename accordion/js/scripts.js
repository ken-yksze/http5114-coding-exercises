const openSection = (targetSectionId) => {
  const targetSection = document.getElementById(targetSectionId);
  const prevDisplay = targetSection.style.display;

  Array.from(document.getElementsByClassName("accordion-section")).forEach(
    (section) => (section.style.display = "none")
  );

  targetSection.style.display = prevDisplay === "block" ? "none" : "block";
};
