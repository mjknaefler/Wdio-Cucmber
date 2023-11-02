const {expect} = require('chai');
const homepage = require('../pages/homepage');
const { Given, Then } = require('@wdio/cucumber-framework');

Given(/^I am on facebook homepage$/, async function (){
    await browser.url('/')
    
});

Then(/^I verify login email field is enabled$/, async function(){
    const isEmailEnabled = await homepage.isLoginEmailEnabled();
    expect(isEmailEnabled,"Login email field is NOT enabled").to.be.true;
    
})

Then(/^I verify login password field is enabled$/, async function(){
    const isPwdEnabled = await homepage.isLoginPwdEnabled();
    expect(isPwdEnabled,"Login email field is NOT enabled").to.be.true;
    
})

Then(/^I verify login button is enabled$/, async function(){
    const isLoginButtonEnabled = await homepage.isLoginButtonEnabled();
    expect(isLoginButtonEnabled,"Login email field is NOT enabled").to.be.true;
    
})