import express from 'express';
import { Course } from '../models/courseModel.js';

const router = express.Router();

// Route for Save a new Course
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.topic ||
      !request.body.time ||
      !request.body.detail ||
      !request.body.createDay ||
      !request.body.finishDay 
    ) {
      return response.status(400).send({
        message: 'Send all required',
      });
    }
    const newCourse = {
      name: request.body.name,
      topic: request.body.topic,
      time: request.body.time,
      detail: request.body.detail,
      createDay: request.body.createDay,
      finishDay: request.body.finishDay,
    };

    const course = await Course.create(newCourse);

    return response.status(201).send(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Courses from database
router.get('/', async (request, response) => {
  try {
    const course = await Course.find({});

    return response.status(200).json({
      count: course.length,
      data: course,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const course = await Course.findById(id);

    return response.status(200).json(course);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.topic ||
      !request.body.time ||
      !request.body.detail ||
      !request.body.createDay ||
      !request.body.finishDay 
    ) {
      return response.status(400).send({
        message: 'Send all required',
      });
    }

    const { id } = request.params;

    const result = await Course.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Course not found' });
    }

    return response.status(200).send({ message: 'Course updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Course.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Course not found' });
    }

    return response.status(200).send({ message: 'Course deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
