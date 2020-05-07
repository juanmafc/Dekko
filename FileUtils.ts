import * as fs from 'fs';

export class FileUtils {
    
    public static writeJsonToFileSync<T>(path:string, data:T):void {
        fs.writeFileSync(path, JSON.stringify(data, null, 2) );
    }
    
    public static readFileToJsonSync<T>(path: string): T {
        const data = fs.readFileSync(path, 'utf8');
        return JSON.parse(data);
    }
    
    public static async readJsonFromFile<T>(path: string): Promise<T> {
        const data:string = await fs.promises.readFile(path, 'utf8');
        return JSON.parse(data);
    }
}

