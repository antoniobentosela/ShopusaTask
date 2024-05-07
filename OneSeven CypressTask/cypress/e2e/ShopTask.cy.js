const dotenv = require('dotenv');
dotenv.config();

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

//I try to give an example of how you can create testings that can be individual and independents (best practice) 


describe('Navigation', () => {
  before(() => {
    cy.login(USER, PASSWORD);
  });

  it('Navigate to Fashion Products', () => {
    cy.get('#rdnavbartoggle').click();
    cy.get('#scroll-membership').click();
    cy.get('.cat-item-1070 > a').click()
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/category/fashion/');
  })
})

describe('Adding product', () => {
  before(() => {
    cy.login(USER, PASSWORD);
    
    //Here you can try to use a new command to navigate.
    
    cy.get('#rdnavbartoggle').click();
    cy.get('#scroll-membership').click();
    cy.get('.cat-item-1070 > a').click()
    cy.url().should('eq', 'https://www.shopusa.com/blog/india/category/fashion/');
  });

  it('Select the product', () => {
    cy.get(':nth-child(16) > .blog-item > .blog-item-content > .title > a').click();
    //Its not the best to use xpath, but in this case we need to implement better frontend code to be able to use cy.get
    cy.xpath('/html/body/div[2]/div[4]/div[3]/div[1]/div/main/article/div/div[5]/div[1]/div/div/div/figure/a').should('have.attr', 'href', 'https://www.ofracosmetics.com/collections/makeup');
    cy.get(':nth-child(1) > .vc_column-inner > div.wpb_wrapper > .wpb_single_image > .wpb_wrapper > .vc_single_image-wrapper > .vc_single_image-img').click();
  })

})