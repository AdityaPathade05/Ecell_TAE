/**
 * Unit Test Suite for E-Cell TAE Interactive Application
 * Verifies key architectural components, milestones, and anti-gravity team cards.
 */

import React from 'react';
import { 
  milestonesData, 
  teamMembersData, 
  initiativesData, 
  speakersData, 
  galleryPhotosData,
  officialGroupPhoto
} from './data/ecellData';

describe('E-Cell TAE Core Data & Structure Integrity', () => {
  test('contains all 8 authentic milestones from the progress report', () => {
    expect(milestonesData).toHaveLength(8);
    expect(milestonesData[0].title).toContain('Campus Ambassadors');
    expect(milestonesData[0].dates).toBe('13–15 JULY 2026');
    expect(milestonesData[1].title).toContain('Principal Recognition');
    expect(milestonesData[6].title).toContain('NEC Member Registration');
    expect(milestonesData[7].title).toContain('Task Submission');
  });

  test('contains leadership team including Campus Ambassador Nisha Nale and Advisors', () => {
    const campusAmbassador = teamMembersData.find((m) => m.name.includes('Nisha'));
    expect(campusAmbassador).toBeDefined();
    expect(campusAmbassador?.role).toContain('IIT Bombay');

    const principal = teamMembersData.find((m) => m.name.includes('Patil'));
    expect(principal).toBeDefined();
    expect(principal?.department).toBe('advisory');

    const facultyAdvisor = teamMembersData.find((m) => m.name.includes('Gulnaz'));
    expect(facultyAdvisor).toBeDefined();
  });

  test('includes official founding group photo and documentary photo archive', () => {
    expect(officialGroupPhoto.url).toBeDefined();
    expect(officialGroupPhoto.title).toContain('Assembly');
    expect(galleryPhotosData.length).toBeGreaterThanOrEqual(5);

    const principalCharter = galleryPhotosData.find(p => p.category === 'charter');
    expect(principalCharter).toBeDefined();
  });

  test('includes flagship initiatives: NEC, Eureka!, Campus Ambassador', () => {
    const necInit = initiativesData.find((i) => i.id === 'nec-iitb');
    expect(necInit).toBeDefined();
    expect(necInit?.partner).toBe('IIT Bombay E-Cell');

    const eurekaInit = initiativesData.find((i) => i.id === 'eureka');
    expect(eurekaInit).toBeDefined();
  });

  test('includes institutional patron and mentor testimonials', () => {
    expect(speakersData.length).toBeGreaterThanOrEqual(3);
    const principalMentor = speakersData.find((s) => s.name.includes('Rupesh'));
    expect(principalMentor).toBeDefined();
    expect(principalMentor?.designation).toContain('Patron');
  });
});
