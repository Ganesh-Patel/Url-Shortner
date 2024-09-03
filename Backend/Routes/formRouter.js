import express from 'express';
import { getOriginalUrl, shortTheUrl } from '../Controllers/formController.js';

const router = express.Router();

router.post('/',
    shortTheUrl
);

router.get('/:shortUrl',
    getOriginalUrl
);

export default router;