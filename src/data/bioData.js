/**
 * ==========================================
 * DONNÉES BIOGRAPHIQUES (bioData.js)
 * ==========================================
 *
 * Ce fichier contient toutes les informations personnelles et professionnelles.
 * Centraliser ces données facilite la maintenance et permet de réutiliser
 * les informations à différents endroits du site.
 *
 * STRUCTURE DU FICHIER :
 * - bioVersions : Différentes longueurs de bio pour différents contextes
 * - skillsData : Compétences techniques (front-end et back-end)
 * - toolsData : Outils et logiciels maîtrisés
 * - softSkillsBio : Compétences interpersonnelles et méthodes de travail
 *
 * COMMENT MODIFIER VOS INFORMATIONS :
 * 1. Trouvez la section concernée ci-dessous
 * 2. Modifiez le texte entre les backticks ` ou les guillemets "
 * 3. Les changements se répercuteront automatiquement sur toutes les pages
 */

export const bioVersions = {
  shortest: `Ange is doing her very best and is ready to work hard on solving your problems.`,

  shorter: `Ange, or Angéline, I'm a French full stack developer located near Lyon. I've always been curious with the web and decided to finally try myself in this job; so far, I've been loving it !

When my head isn't into coding, I enjoy gaming and raiding, writing, reading and of course music to accompagny these. As a teammate, I wish not only to progress but help those around me.`,

  long: `Ange, or Angéline, I'm a French full stack developer located near Lyon. I've always been curious with the web, I remember playing around HTML when I was 12, so 12 years later I took a leap of faith and went into professionally learning the job; so far, I've been loving it !

When my head isn't into coding, I enjoy gaming and raiding, writing, reading and of course music to accompagny these.

As a teammate, I wish not only to progress but help those around me as I love to see the path and progress made throughout our hard earned achievement !`,

  longest: `Ange, or Angéline, I'm a French full stack developer located near Lyon. I've always been curious with the web, I remember playing around HTML when I was 12 years old. So 12 years later I took a leap of faith and went into seriously learning the job; so far, I've been loving it !

When my head isn't into coding, I enjoy gaming and raiding alongside friends as well as writing or reading, mostly fantasy and of course I indulge in all these with music on.

As a teammate, I wish not only to progress but help those around me as I love to see the path and progress made throughout our hard earned achievement ! I enjoy both interacting with people around me as I love to retract in my bubble with good music and immerse myself fully into my work.`
};

export const skillsData = {
  front: "HTML ✧ CSS / SCSS ✧ JS / Vue.js ✧ Bootstrap",
  back: "PHP ✧ SQL ✧ MySQL ✧ Python ✧ Symphony ✧ Rest API"
};

export const toolsData = "✧ Figma ✧ Git / GitHub ✧ VS Code ✧ Notion ✧ Trello";

export const softSkillsBio = `As a full-stack developper I've been able to work on all front of web-designing and feel confident on both front, but I love learning new things and exchange with others about their opinions on a shared project to level up my own abilities in coding !

In solo or group project, I like to keep things organised may it be about making to-do list or creating schedules of my own tasks and even down to the organisation of my code. I want my work to be clear and efficient, for myself and for others, I always thrive to adapt in the best way possible.`;
