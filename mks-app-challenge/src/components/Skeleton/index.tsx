import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
    return (
        <Stack spacing={1}>

            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={218} height={60} />
            <Skeleton variant="rounded" width={218} height={60} />
        </Stack>
    );
}