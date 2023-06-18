import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static passwordCheck = async (password: string, hashedPassword: string): Promise<Boolean> => {
    let result = await bcrypt.compare(password, hashedPassword);
    return result;
  };

  public static generateToken = (payload: JwtPayload): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'secret';

    const token: string = jwt.sign(payload, secretKey);

    return token;
  };
}

export default Authentication;
