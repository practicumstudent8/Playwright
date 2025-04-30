
const { test, expect } = require('@playwright/test');
const { describe } = require('node:test');

test.describe("Playwrigth automation suite",() =>{


    test('Enter Gui elementts ', async ({page})=>
    {
 
    const loginButton =page.locator("//button[normalize-space()='Login']")
    const userName = page.locator("input[placeholder='Please enter an Email']")
    const password = page.locator("input[placeholder='Please enter a Password']")
    const submitButton = page.locator("#loginButton")
    const logoutButton= page.locator("span[class='logout-box'] button[class='button-toggle']")
    console.log("this is javascript playwrigth automation");
    await page.goto('https://skryabin-careers.herokuapp.com/');
    await loginButton.click();
    await userName.fill("student@example.com");
    await password.fill("welcome");
    await submitButton.click();
    await logoutButton.click();
    await page.close();

    });

});


test.describe("Playwrigth automation suite",() =>{


  test('Enter Gui radio  elementts ', async ({page})=>

  {

      await page.goto("https://testautomationpractice.blogspot.com/ ");
      await page.locator('body').click();
      await expect(page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Male' }).nth(1)).toBeVisible();
      await page.close();

    });

  });




test.describe("Playwrigth automation suite",() =>{


  test('Enter labels and links radio  elementts ', async ({page})=>

  {

      await page.goto("https://testautomationpractice.blogspot.com/ ");
      await page.getByText('Samsung').click();
      await page.getByText('Real Me').click();
      await page.getByText('Moto').click();
      await expect(page.getByText('Real Me')).toBeVisible();
      await expect(page.getByText('Moto')).toBeVisible();
     

    });

  });




test.describe("Playwrigth automation suite",() =>{


  test('Enter broken links radio  elementts ', async ({page})=>

  {

   await page.goto("https://testautomationpractice.blogspot.com/ ");
  await page.getByRole('link', { name: 'Errorcode 400' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 403' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 404' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 408' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 500' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 502' }).click();
  await page.goBack();
  await page.getByRole('link', { name: 'Errorcode 503' }).click();
  await page.goBack();
  await page.close();
});
     

    });





  test.describe("Playwrigth automation suite",() =>{


    test('Enter prompt alert  elementts ', async ({page})=>
  
    {
  
        await page.goto("https://testautomationpractice.blogspot.com/ ");
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'Prompt Alert' }).click();
  
      });
  
    });

  test.describe("Playwrigth automation suite",() =>{


    test('Enter alerrts and prompts  ', async ({page})=>
  
    {
  
        await page.goto("https://testautomationpractice.blogspot.com/ ");
        await page.goto('https://testautomationpractice.blogspot.com/');
        page.once('dialog', dialog => {
          console.log(`Dialog message: ${dialog.message()}`);
          dialog.dismiss().catch(() => {});
        });
        await page.getByRole('button', { name: 'Simple Alert' }).click();
  
      });
  
    });




    test('Enter confirm alert  and prompts  ', async ({page})=>
  
      {
    
          await page.goto("https://testautomationpractice.blogspot.com/ ");
          page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
          await page.getByRole('button', { name: 'Confirmation Alert' }).click();
       
    
        });


test.describe("Playwrigth automation suite",() =>{


  test('Enter Gui checkboxes elementts ', async ({page})=>

  {


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('checkbox', { name: 'Sunday' }).check();
    await page.getByRole('checkbox', { name: 'Monday' }).check();
    await page.getByRole('checkbox', { name: 'Tuesday' }).check();
    await page.getByRole('checkbox', { name: 'Wednesday' }).check();
    await page.getByRole('checkbox', { name: 'Thursday' }).check();
    await page.getByRole('checkbox', { name: 'Friday' }).check();
    await page.getByRole('checkbox', { name: 'Saturday' }).check();
    await expect(page.getByText('Days:')).toBeVisible();
    await page.locator('#post-body-1307673142697428135 div').filter({ hasText: 'Friday' }).nth(1).click();
    await page.getByRole('checkbox', { name: 'Saturday' }).uncheck();
    await expect(page.getByText('Monday')).toBeVisible();
    await expect(page.getByText('Tuesday')).toBeVisible();
    await expect(page.getByText('Days: Sunday Monday Tuesday')).toBeVisible();
    await page.getByText('Wednesday').click();
    await expect(page.getByText('Thursday')).toBeVisible();
    await expect(page.getByText('Friday')).toBeVisible();
    await expect(page.getByText('Saturday')).toBeVisible();
     
    });

  });
  

test.describe("Playwrigth automation suite",() =>{


  test('Enter new  Gui elementts ', async ({page})=>
  {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('textbox', { name: 'Enter Name' }).click();
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('karthik');
    await page.getByRole('textbox', { name: 'Enter Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill('kutalakarthik@gmail.com');
    await page.getByRole('textbox', { name: 'Enter EMail' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Phone' }).fill('3023572319');
    await page.getByRole('textbox', { name: 'Enter Phone' }).press('Tab');
    await page.getByRole('textbox', { name: 'Address:' }).fill('6857 south ivy waytsreet ');
    await page.close();



  });

});



test.describe("Playwrigth automation suite",() =>{
    
    test('Enter Gui careers  ', async ({page})=>
    {
    
    await page.goto('https://skryabin-careers.herokuapp.com/');   
    await page.getByRole('button', { name: ' Apply' }).click();
    await page.getByRole('textbox', { name: 'Enter First Name' }).click();
    await page.getByRole('textbox', { name: 'Enter First Name' }).fill('karthik');
    await page.getByRole('textbox', { name: 'Enter First Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Optional' }).fill('none');
    await page.getByRole('textbox', { name: 'Optional' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Last Name' }).fill('kutala');
    await page.getByRole('textbox', { name: 'Enter Last Name' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('kutalakarthik@gmail.com');
    await page.getByRole('textbox', { name: 'Enter Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Kutala1992@');
    await page.getByRole('textbox', { name: 'Enter Password' }).press('Tab');
    await page.getByRole('textbox', { name: 'Confirm Password' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Confirm Password' }).fill('Kutala1992@');
    await page.getByRole('textbox', { name: 'Confirm Password' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter detailed Summary' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Enter detailed Summary' }).fill('Hello , ');
    await page.getByRole('textbox', { name: 'Enter detailed Summary' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Enter detailed Summary' }).fill('Hello , I have expericne in automation and would love ti pursue the oppurtunity');
    await page.getByRole('textbox', { name: 'Enter detailed Summary' }).press('Tab');
    await page.getByRole('textbox', { name: 'Main st' }).fill('6827 south ivy way street');
    await page.getByRole('textbox', { name: 'Main st' }).press('Tab');
    await page.getByRole('textbox', { name: 'City' }).fill('centennial');
    await page.getByRole('textbox', { name: 'City' }).press('Tab');
    await page.getByRole('combobox').selectOption('CO');
    await page.getByRole('textbox', { name: 'Zip code. Zip plus' }).click();
    await page.getByRole('textbox', { name: 'Zip code. Zip plus' }).fill('80112');
    await page.getByRole('button', { name: 'Submit' }).click();

    });


    test.describe("Playwrigth automation suite",() =>{
    
        test('Enter Gui new open position   ', async ({page})=>

        {
        
        await page.goto('https://skryabin-careers.herokuapp.com/');   
        await page.getByRole('button', { name: ' Login' }).click();
        await page.getByRole('textbox', { name: 'Please enter an Email' }).click();
        await page.getByRole('textbox', { name: 'Please enter an Email' }).fill('student@example.com');
        await page.getByRole('textbox', { name: 'Please enter an Email' }).click();
        await page.getByRole('textbox', { name: 'Please enter a Password' }).fill("welcome");
        await page.getByRole('textbox', { name: 'Please enter a Password' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: ' Recruit' }).click();
        await page.getByRole('link', { name: 'New Position' }).click();
        await page.getByRole('textbox', { name: 'Enter position Title' }).click();
        await page.getByRole('textbox', { name: 'Enter position Title' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Enter position Title' }).fill('SDET');
        await page.getByRole('textbox', { name: 'Enter position Title' }).press('Tab');
        await page.getByRole('textbox', { name: 'Enter detailed Description' }).click();
        await page.getByRole('textbox', { name: 'Enter detailed Description' }).press('CapsLock');
        await page.getByRole('textbox', { name: 'Enter detailed Description' }).fill('An automation developer who is well versed in usage of tools and building graemworks to ensure the quality of the digital products ');
        await page.getByRole('textbox', { name: 'Main st' }).click();
        await page.getByRole('textbox', { name: 'Main st' }).fill('6857 south ivy way street ');
        await page.getByRole('textbox', { name: 'City' }).click();
        await page.getByRole('textbox', { name: 'City' }).fill('centennial');
        await page.getByRole('combobox').selectOption('CO');
        await page.getByRole('textbox', { name: 'Zip code. Zip plus' }).click();
        await page.getByRole('textbox', { name: 'Zip code. Zip plus' }).fill('80112');
        await page.getByRole('textbox', { name: 'Date Open*' }).click();
        await page.getByRole('option', { name: 'day-27' }).click();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('button', { name: ' Logout' }).click();
      });

    
        });
    
});
