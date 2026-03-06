import express from 'express';
import { 
    createFootwear, 
    deleteFootwear, 
    getAllFootwear, 
    getFootwearById, 
    updateFootwear,
    getFootwearStats
} from '../controllers/footwearController.js';

const router = express.Router();

router.get('/', getAllFootwear);
router.get('/:id', getFootwearById);
router.post('/', createFootwear);
router.put('/:id', updateFootwear);
router.delete('/:id', deleteFootwear);
router.get('/filter/:filterBy/:value', getFootwearStats);

export default router;
