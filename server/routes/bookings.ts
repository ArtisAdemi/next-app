import { Router, Request, Response } from 'express';
import { bookingController, BookingResponse, CreateBookingRequest } from '../controllers/bookingController';
import { checkRole } from '../middleware/checkRole';

const router = Router();

// Create a new booking (public route)
router.post('/', async (req: Request, res: Response) => {
    await bookingController.createBooking(
        req as CreateBookingRequest,
        res as unknown as { status: (code: number) => { json: (data: BookingResponse) => BookingResponse } }
    );
});

// Get all bookings (admin only)
router.get('/', checkRole('admin'), async (req: Request, res: Response) => {
    await bookingController.getBookings(req as object, res as unknown as {
        status: (code: number) => { json: (data: BookingResponse) => BookingResponse }
    });
});

// Update booking status (admin only)
router.patch('/:id/status', checkRole('admin'), async (req: Request, res: Response) => {
    await bookingController.updateBookingStatus(
        req as unknown as { params: { id: string }; body: { status: string } },
        res as unknown as { status: (code: number) => { json: (data: BookingResponse) => BookingResponse } }
    );
});

export default router; 