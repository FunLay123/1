import GameDirectoryResolver from './GameDirectoryResolver';
import R2Error from 'src/model/errors/R2Error';
import OpenUtils from 'src/utils/OpenUtils';
import * as path from 'path';
import * as fs from 'fs-extra';

export default class PreloaderFixer {

    public static fix(): R2Error | void {
        const dirResult = GameDirectoryResolver.getDirectory();
        if (dirResult instanceof R2Error) {
            return dirResult;
        }
        if (!fs.existsSync(path.join(dirResult, 'Risk of Rain 2.exe'))) {
            return new R2Error('Risk of Rain 2 directory is invalid', 'could not find "Risk of Rain 2.exe"',
                'Set the Risk of Rain 2 directory in the settings section');
        }
        try {
            fs.removeSync(path.join(dirResult, 'Risk of Rain 2_Data', 'Managed'));
        } catch(e) {
            const err: Error = e;
            return new R2Error('Failed to remove Managed directory', err.message, 'Try launching r2modman as an administrator');
        }
        try {
            OpenUtils.openURI('steam://validate/632360');
        } catch(e) {
            const err: Error = e;
            return new R2Error('Failed to start steam://validate', err.message, null);
        }
    }
}
