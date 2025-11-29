// Simple JWT decoder (without verification - for client-side only)
export const decodeToken = (token) => {
  try {
    if (!token) return null;
    
    // JWT format: header.payload.signature
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    // Decode the payload (second part)
    const payload = parts[1];
    // Base64 decode
    const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(decoded);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const getUserIdFromToken = (token) => {
  const decoded = decodeToken(token);
  return decoded?.userId || decoded?.userId || null;
};

