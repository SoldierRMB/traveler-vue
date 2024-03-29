import request from '@/utils/request';

export const apiGetUserAttractions = async () => {
    return await request.get('/admin/getUserAttractions');
};

export const apiGetUnreviewedUserAttractions = async () => {
    return await request.get('/admin/getUnreviewedUserAttractions');
};

export const apiReviewAttractions = async (data: number[], pass: boolean) => {
    return await request.put('/admin/reviewAttractions', data, { params: { pass } });
};