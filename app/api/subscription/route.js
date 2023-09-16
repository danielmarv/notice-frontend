import axios from 'axios';

const API_URL = 'http://localhost:1337/api/subscriptions'; // Replace with your actual API URL

export async function createSubscription(formData) {
  try {
    const response = await axios.post(API_URL, {
      collectionName: 'subscriptions', // Set the collectionName based on your schema
      data: [
        {
          email: formData.email,
        },
      ],
    });

    // If the request is successful, you can handle the response here
    console.log('Subscription created:', response.data);

    return response.data; // You can return the created subscription data if needed
  } catch (error) {
    // Handle any errors that occurred during the POST request
    console.error('Error creating subscription:', error);
    throw error;
  }
}
